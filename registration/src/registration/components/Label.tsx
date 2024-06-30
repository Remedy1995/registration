import React from "react"

interface LabelProps {
    name: string,
    symbol: string
}
export const Label = ({ name, symbol }: LabelProps) => {
    return (<label htmlFor="exampleFormControlInput1" className="form-label fw-semibold"> <span className="text-danger fs-6 fw-bold">{symbol}</span>{name}</label>)
}