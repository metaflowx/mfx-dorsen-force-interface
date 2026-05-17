import Link from "next/link";

interface Props {
    href: string;
    btn: string;
    block?: string; // <-- added block as optional string
}

const Button = ({ href, btn, block }: Props) => {
    return (
        <div >
            <Link
            target="_blank"
                href={href}
                className={`px-5 py-3 font-bold cursor-pointer font-agdasima! uppercase font- rounded-full   text-black bg-linear-to-br from-[#C09EFC] via-[#46A5FE] to-[#2E558E]    ${block ?? ""}`}
            >
                {btn}
            </Link>
        </div>
    );
};

export default Button;
