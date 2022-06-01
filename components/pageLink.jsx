import { LinkButton } from "../theme/global.css";
import Link from "next/link";

const PageLink = ({href, children}) => {
    return <Link href={href} passHref >
        <LinkButton
            initial={{boxShadow:'var(--box-shadow)'}}
            whileHover={{boxShadow:'var(--box-shadow-hover)'}}
            transition={{duration:.3, ease:'easeInOut' }}
        >
            {children}
        </LinkButton>
    </Link>
}

export default PageLink