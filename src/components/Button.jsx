
export default function Button({content}){
    return (
        <div>
            <button className="bg-button border-solid border-black-900 w-fit rounded-lg p-[10px] text-[12px]">{content}</button>
        </div>
    )
}