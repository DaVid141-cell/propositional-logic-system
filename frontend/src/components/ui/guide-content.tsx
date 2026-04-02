import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
const contents = [
    {
        value: "description",
        title: ">>Symbols and Descriptions",
        header: "The following symbols are used in this application to represent common propositional logic operations:",
        content: [
            "'~'  = Negation (NOT) == ~p",
            "'^'      = Conjunction (AND) == p ^ q",
            "'|'      = Disjunction (OR) == p v q",
            "'>'      = Conditional (IF p THEN q) == p > q",
            "'<>'     = Biconditional (p IF AND ONLY IF q) == p <> q"

        ],
        footer: "These symbols are used as keyboard-friendly alternatives to standard propositional logic notation. While they may look different from the traditional mathematical symbols, they represent the same logical operations."
        
    },
    {
        value: "supported",
        title: ">>Supported Statements",
        header: "The system works best with basic logical expression, for example:",
        content: [
            "p | q",
            "~p > q",
            "(p ^ q) > r",
            "(p ^ q) | (r ^ q) ^ r"
        ],
        footer: `Keep that in mind that the symbols you can see are just example you put whatever symbols you like as long as the expression is looking like that. And there might be some problem with the "<>" symbol if the expression is long, so make sure to breakdown them into smaller parts if you are using that symbol.`
    },
    {
        value: "complex",
        title: ">>Complex Statements",
        header: "At the moment, the system cannot reliably solve more complex logical statements, such as:",
        content: [
            "(p ^ q) > (~p | q) <> r",
            "(p ^ q) > (~p | q) <> (r | ~q) ^ p"
        ],
        footer: "For more advanced and nested logical expressions may be added in a future update as the system will make it be better on handling complexity."
    },
    {
        value: "notes",
        title: ">>The Taking Down Notes",
        header: "If you need to solve a complex logical statement, it is recommended to break the problem down into smaller parts.",
        content: [
            "You can solve each part individually using the system and take notes during the process.",
            "The application provides a section where you can record intermediate results and keep track of your steps while solving the full expression manually."
        ],
        footer: "This approach allows you to gradually evaluate complex logical statements by solving them one step at a time."
    },
]

export function GuideContent () {
    return (
        <Accordion type="single" collapsible className="w-full text-muted-foreground">
            {contents.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="font-bold ">{item.title}</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            <p className=" mb-2">{item.header}</p>
                        </div>
                        <div className="text-red-500 mb-2">
                            {item.content.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                        <div>
                            <p className="">{item.footer}</p>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}