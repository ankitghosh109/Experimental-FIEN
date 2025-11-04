import { useMutation, useQuery } from "@tanstack/react-query";
import { authAPI } from "../../api/authAPI";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => authAPI.register(data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => authAPI.login(data),
  });
};

// export const useProfile = () => {
//   return useQuery({
//     queryKey: ["profile"],
//     queryFn: authAPI.getProfile,
//   });
// };
