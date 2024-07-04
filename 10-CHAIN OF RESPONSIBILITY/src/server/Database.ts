import PermissionType from "./PermissionType";

interface DatabaseItem{
    email : string;
    password : string;
    permission: PermissionType;

}

const Database : DatabaseItem[] = [
    {email: "xiii@gmail.com",
     password: "senha123",
     permission: PermissionType.ADMIN
    },
    {email: "iiix@gmail.com",
     password: "321ahnes",
     permission: PermissionType.USER
    },
];
export default Database;