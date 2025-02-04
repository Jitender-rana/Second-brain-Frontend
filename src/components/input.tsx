interface InputProps {
    type: string; 
    placeholder: string; 
    reference?: any;
    labelname?: string;
    marginleft?: boolean;
}
const defaultStyles="px-4 py-2 border  border-purple-200 rounded m-2";
export function Input({placeholder, reference ,labelname,marginleft,type}: InputProps) {
    return <div>
        <label>{labelname}</label>
        <input ref={reference} placeholder={placeholder} type={type} className={`${defaultStyles} ${marginleft?" ml-9":""}`}></input>
    </div>
}