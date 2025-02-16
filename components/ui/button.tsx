'use client'

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	actionProp?: string
	action?: (...args: any) => void;
}
export const Button = ({action, actionProp, children, ...props}: ButtonProps) => {
	return (
		<button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 mb-4" onClick={() => action && action(actionProp)} {...props}>
			{ children }
		</button>
	)
}