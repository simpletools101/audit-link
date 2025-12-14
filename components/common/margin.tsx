interface IMarginProps {
    children: React.ReactNode
}

export default function Margin(props: IMarginProps) {
    return <div className="mr-14 ml-14">{props.children}</div>
}
