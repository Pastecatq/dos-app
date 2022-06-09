import Link from "next/link";
export default function MainLoyaut(){
    return (
        <div style={{display:"flex",justifyContent:"center",background:"darkviolet"}}>
            <Link href="/"><a style={{margin:"10px",}}>Главный страница</a></Link>
            <Link href="/about"><a style={{margin:"10px"}}>О нас</a></Link>
            <Link href="/recall"><a style={{margin:"10px"}}>Отзывы</a></Link>

        </div>
    );
}
