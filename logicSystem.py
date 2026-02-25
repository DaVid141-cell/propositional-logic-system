import re
from statements import Statements
from truth_table import TruthTable
from tautology_checker import TautologyChecker
from connectives import evaluate_expression


class LogicSystem:
    def __init__(self, expression):
        self.expression = expression
        self.statement = Statements(expression)
        self.truth_table = None
        self.analysis = None

    # Generate truth table
    def process(self):
        self.truth_table = TruthTable(self.statement)
        self.truth_table.generate_table()

        checker = TautologyChecker(self.truth_table)
        self.analysis = checker.check_statement()

    # Display results
    def show_results(self):
        print("\nTruth Table:")
        self.truth_table.display_table()
        print(f"\nStatement analysis: {self.analysis}")

    # Check logical equivalence
    def check_equivalence(self, second_expression):
        statement2 = Statements(second_expression)
        tt2 = TruthTable(statement2)
        tt2.generate_table()

        equivalent = TautologyChecker.check_equivalence(
            self.truth_table, tt2
        )
        return equivalent
    
    def solve_given_values(self):
        print("\nSolve Expression using given values")

        values_dict = {}

        # Ask user input automatically
        for var in self.statement.variables:
            while True:
                val = input(f"Enter value for {var} (T/F): ").strip().upper()

                if val == "T":
                    values_dict[var] = True
                    break
                elif val == "F":
                    values_dict[var] = False
                    break
                else:
                    print("Invalid input. Please enter T or F")
        
        result = evaluate_expression(self.expression, values_dict)



        return values_dict, result

    def solve_with_steps(self, values_dict):
        print("\nStep-by-step evaluation:")

        expr = self.expression

        while "(" in expr:
            # find innermost parentheses
            inner = re.findall(r'\([^()]+\)', expr)

            for part in inner:
                clean = part[1:-1]                                  # remove parentheses
                result = evaluate_expression(clean, values_dict)    # evaluate part
                output = "T" if result else "F"                     # for printing only
                print(f"{part} = {output}")
                
                # Replace parentheses with Python boolean
                expr = expr.replace(part, str(result), 1)
                break                                                # solve only one parenthesis at a time

        # evaluate the remaining expression
        final_result = evaluate_expression(expr, values_dict)
        output = "T" if final_result else "F"
        print(f"{self.expression} = {output}")

        return final_result


