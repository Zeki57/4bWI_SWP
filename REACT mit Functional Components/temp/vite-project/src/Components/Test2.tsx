import React, { Component, useEffect, useState } from 'react'

type Props = {
    title: string;
}


export default function Test2({ title }: Props) {
    const [users, setUsers] = useState<Array<string>>([]);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()).then((data: Array<string>) => {
                setUsers(data);
            });
    }, [])

    return (
        <div className={`${visible ? "bg-blue-100" : "bg-red-100"}`} />
    );
}
