import { render, fireEvent,screen } from "@testing-library/react";
import Board from "./Board";

describe("Renders an empty board", () => {
    it("has 9 squares", () => {
        render(<Board />)
        const squares = screen.queryAllByTestId('square')

        expect(squares.length).toBe(9)

        expect(squares[0].textContent).toBe("")
        expect(squares[1].textContent).toBe("")
        expect(squares[2].textContent).toBe("")
        expect(squares[3].textContent).toBe("")
        expect(squares[4].textContent).toBe("")
        expect(squares[5].textContent).toBe("")
        expect(squares[6].textContent).toBe("")
        expect(squares[7].textContent).toBe("")
        expect(squares[8].textContent).toBe("")

        const stat = screen.queryByTestId("status");
        expect(stat).toHaveTextContent("Next player: X")
    })
})

describe("Board functionality" ,()=>{
    it("changes value on click",()=>{
        render(<Board />)
        const squares = screen.queryAllByTestId('square')
    
        fireEvent.click(squares[0])
        fireEvent.click(squares[1])
        expect(squares[0].textContent).toBe('X');
        expect(squares[1].textContent).toBe('O');
    })
    it("disables clicked squares",()=>{
        render(<Board />)
        const squares = screen.queryAllByTestId('square')
        fireEvent.click(squares[0])
        expect(squares[0].textContent).toBe('X');
    
        fireEvent.click(squares[0]) 
        expect(squares[0].textContent).toBe('X');
    })

    it("declares X as winner",()=>{
        render(<Board/>)
        const squares = screen.queryAllByTestId('square')

        fireEvent.click(squares[4])//X
        fireEvent.click(squares[0])//O
        fireEvent.click(squares[1])//X
        fireEvent.click(squares[3])//O
        fireEvent.click(squares[7])//X

        const stat = screen.queryByTestId("status");
        expect(stat).toHaveTextContent("Winner: X")
    })

    it("declares O as winner",()=>{
        render(<Board/>)
        const squares = screen.queryAllByTestId('square')

        fireEvent.click(squares[4])//X
        fireEvent.click(squares[0])//O
        fireEvent.click(squares[3])//X
        fireEvent.click(squares[1])//O
        fireEvent.click(squares[7])//X
        fireEvent.click(squares[2])//O

        const stat = screen.queryByTestId("status");
        expect(stat).toHaveTextContent("Winner: O")
    })
})