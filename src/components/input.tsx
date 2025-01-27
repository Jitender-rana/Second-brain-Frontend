interface InputProps { 
    placeholder: string; 
    reference?: any;
    labelname?: string;
}

export function Input({placeholder, reference ,labelname}: InputProps) {
    return <div>
        <label>{labelname}</label>
        <input ref={reference} placeholder={placeholder} type={"text"} className="px-4 py-2 border  border-purple-200 rounded m-2" ></input>
    </div>
}