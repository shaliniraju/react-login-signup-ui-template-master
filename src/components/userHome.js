import React , { Component, useEffect, useState} from "react";

export default function UserHome({userData}){

    return (
        <div>
            <h1>welcome user</h1>
            Name <h1>{userData.fname}</h1>
            Email<h1>{userData.email}</h1>
            
        </div>
    )
}