# MongoDB Built-in Roles Hierarchy

## 🧩 1. Database User Roles
```
read
└── readWrite
```

---

## 🧰 2. Database Administration Roles
```
userAdmin
dbAdmin
└── dbOwner
    ├── readWrite
    ├── dbAdmin
    └── userAdmin
```

---

## 🌍 3. Cluster Administration Roles
```
clusterMonitor
clusterManager
hostManager
└── clusterAdmin
    ├── clusterManager
    ├── clusterMonitor
    └── hostManager
```

---

## ⚙️ 4. Backup and Restore Roles
```
backup
restore
```

---

## 🧑‍💻 5. All-Database Roles
```
readAnyDatabase
└── readWriteAnyDatabase
    ├── dbAdminAnyDatabase
    ├── userAdminAnyDatabase
    └── readAnyDatabase
```

---

## 🛡️ 6. Superuser Role
```
root
└── (inherits all roles from every category)
```

---

## 💾 7. Internal/System Role
```
__system
```

---

## ✅ Summary Table

| Category | Example Roles | Description |
|-----------|----------------|-------------|
| **Data Access** | read, readWrite | Access data in one DB |
| **DB Admin** | dbAdmin, dbOwner, userAdmin | Manage collections, indexes, users |
| **Cluster Admin** | clusterAdmin, clusterMonitor | Cluster-level operations |
| **All-DB Access** | readWriteAnyDatabase, userAdminAnyDatabase | Access/admin all DBs |
| **Backup/Restore** | backup, restore | Used for dump and restore ops |
| **Superuser** | root | Full unrestricted access |
| **Internal** | __system | Reserved by MongoDB |
