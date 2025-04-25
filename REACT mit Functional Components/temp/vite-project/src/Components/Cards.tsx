import React from 'react'
import Card from './Card'

type Props = {}

export default function Cards({ }: Props) {
    return (
        <div className="flex">
            <Card Name={"Zeki"} Jobtitel={"Student"} Description={"Clever"} />
            <Card Name={"David"} Jobtitel={"IT"} Description={"Cute"} />
        </div>
    )
}   