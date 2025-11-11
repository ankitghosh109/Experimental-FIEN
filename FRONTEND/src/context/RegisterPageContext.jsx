import { createContext, useEffect, useMemo, useState } from "react"
import { useRegister } from "../hooks/apiHooks/useAuthQueries"

export const RegisterPageContext = createContext()

export const RegisterPageContextProvider = ({ children }) => {
  const {
    mutateAsync,
    mutate: register,
    isPending,
    isError,
    error,
  } = useRegister()

  const [Errors, setErrors] = useState({})
  const [registerForm, setRegisterForm] = useState({
    email: "",
    global_name: "",
    username: "",
    password: "",
    date_of_birth: {
      month: "",
      day: "",
      year: "",
    },
  })

  const aboutInputValues = {
    global_name:
      "This is how others see you. You can use special characters and emojis.",
    username: "Please only use numbers, letters, underscores _ or full stops.",
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setRegisterForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  function handleDobChange(e, option, toPop) {
    setRegisterForm((prev) => ({
      ...prev,
      date_of_birth: {
        ...prev.date_of_birth,
        ...(toPop === "popoutMonths"
          ? { month: option.label }
          : toPop === "popoutDays"
          ? { day: option.label }
          : toPop === "popoutYears"
          ? { year: option.label }
          : ""),
      },
    }))
  }

  function handleSubmitRegistrationForm(e) {
    e.preventDefault()
    const errorData = validate(registerForm)

    if (Object.keys(errorData).length) return

    // console.log(registerForm)
    register(registerForm, {
      onError: (err) => {
        // err is usually the Axios error returned by your mutation
        const errorData = err.response?.data

        if (errorData?.code === 11000) {
          const errorsMessages = {}
          Object.entries(errorData.errors).forEach(([key, value]) => {
            errorsMessages[key] = value.message
          })

          // set state → immediately visible in UI
          setErrors(errorsMessages)
        } else {
          console.log(err)
        }
      },
    })
  }

  const validationConfig = {
    email: [
      { required: true, message: "Required" },
      { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
    ],
    global_name: [{ required: false }],
    username: [{ required: true, message: "Required" }],
    password: [
      { required: true, message: "Required" },
      { minLength: 8, message: "Must be at least 8 characters long" },
    ],
    date_of_birth: [
      { required: true, message: "Required" },
      { validate: true, message: "Please enter a valid date of birth" },
    ],
  }

  function validate(registerForm) {
    const errorData = {}

    Object.entries(registerForm).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message
          return true
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message
          return true
        }
        if (rule.pattern && !rule.pattern.test(value.trim())) {
          errorData[key] = rule.message
          return true
        }
        if (
          rule.required &&
          key === "date_of_birth" &&
          (!value.month || !value.day || !value.year)
        ) {
          errorData[key] = rule.message
          return true
        }
        if (rule.validate && value.month && value.day && value.year) {
          const isValid = isValidDate(value.month, value.day, value.year)
          if (!isValid) {
            errorData[key] = rule.message
          }
          if (isValid) return true
        }
      })
    })
    setErrors(errorData)
    return errorData
  }

  function isValidDate(monthName, day, year) {
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth()
    const date = new Date(year, monthIndex, day)

    // Check that JS didn’t auto-correct (like 31 Feb → 3 Mar)
    return (
      date.getFullYear() === Number(year) &&
      date.getMonth() === monthIndex &&
      date.getDate() === Number(day)
    )
  }

  useEffect(() => {
    if (
      registerForm.date_of_birth.month &&
      registerForm.date_of_birth.day &&
      registerForm.date_of_birth.year
    ) {
      setErrors((prev) => ({ ...prev, date_of_birth: "" }))
    }

    validationConfig.date_of_birth.forEach((rule) => {
      if (
        rule.validate &&
        registerForm.date_of_birth.month &&
        registerForm.date_of_birth.day &&
        registerForm.date_of_birth.year
      ) {
        const isValid = isValidDate(
          registerForm.date_of_birth.month,
          registerForm.date_of_birth.day,
          registerForm.date_of_birth.year
        )
        if (!isValid) {
          setErrors((prev) => ({ ...prev, date_of_birth: rule.message }))
        }
      }
    })
  }, [registerForm.date_of_birth])
  
  const value = {
    registerForm,
    setRegisterForm,
    handleInputChange,
    handleSubmitRegistrationForm,
    Errors,
    handleDobChange,
    aboutInputValues,
  }

  return (
    <RegisterPageContext.Provider value={value}>
      {children}
    </RegisterPageContext.Provider>
  )
}
