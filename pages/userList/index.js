
import React from "react";
import LayoutPage from "@/components/layout";
import UserPage from "@/components/userPage";

function UserList() {
    return (
        <UserPage />
    )

};
UserList.getLayout = function getLayout(page) {
    return <LayoutPage>{page}</LayoutPage>;
};

export default UserList;