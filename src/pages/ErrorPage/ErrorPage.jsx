import { useRouteError } from "react-router-dom";
import { Wrapper, Image, P } from "./style"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <Wrapper>
            <Image src="../../images/missingno.png"></Image>
            <h1>Wild MISSINGNO. appeared!</h1>
            <P>Sorry, an unexpected error has occurred.</P>
            <P>
                <i>{error.statusText || error.message}</i>
            </P>
        </Wrapper>
    )
}