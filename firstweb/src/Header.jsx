

export default function Header({headerInfo, cname, children}) {
  // console.log(props);
  return (
    <div>
        <h1>Header</h1>
        <div>This is header component {headerInfo.phone}</div>
        <div>This take harder {headerInfo.email}</div>
        <div>This too harder {cname}</div>
        {children}
    </div>
  )
}
