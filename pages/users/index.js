
import React from "react";
import LayoutPage from "@/components/layout";
import UserPage from "@/components/userPage";

function Users() {
    return (
       <UserPage/>
    )

};
Users.getLayout = function getLayout(page) {
    return <LayoutPage>{page}</LayoutPage>;
};

export default Users;