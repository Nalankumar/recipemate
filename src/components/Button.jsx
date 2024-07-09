
export default function Button({content}){
    return (
        <div>
            <button className="bg-button border-solid border-black-900 w-[80px] h-[30px] rounded-md">{content}</button>
        </div>
    )
}