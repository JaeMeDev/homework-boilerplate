import {render, screen} from "@testing-library/react";
import Text from "./Text";

describe('Text',() => {
    it('Hello를 화면에 보여준다.',()=>{
        render(<Text/>)

        expect(screen.getByText('Hello')).toBeInTheDocument();
    })
})
