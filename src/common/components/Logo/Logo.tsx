import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/admin">
        <Image src="/menaps-logo.png" alt="logo" width={148} height={30.15} />
    </Link>
  );
};

export default Logo;
