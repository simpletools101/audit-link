interface IMarginProps {
    children: React.ReactNode
}

export default function Margin(props: IMarginProps) {
    return <div className="mr-12 ml-12">{props.children}</div>
}
