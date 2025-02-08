
export default function InputText({placeholder, onChange}: {placeholder: string, onChange: ()=>void}) {

    return <input className="bg-input" placeholder={placeholder} onChange={onChange}/>;
}