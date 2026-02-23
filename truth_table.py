import itertools
from connectives import evaluate_expression


class TruthTable:
    def __init__(self, statement):
        self.statement = statement
        self.variables = statement.variables
        self.table = []                         # List to store rows of the truth table

    def generate_table(self):
        """
        generate all possible truth value combination and evalute the statement.
        """
        combinations = list(itertools.product([True, False], repeat=len(self.variables)))

        for combo in combinations:
            values_dict = dict(zip(self.variables, combo))
            result = self.statement.evaluate(values_dict, evaluator=evaluate_expression)

            row = {**values_dict, "Result": result}
            self.table.append(row)

    def display_table(self):
        """
        print's the truth table in a readable format
        """
        header = self.variables + ["Result"]
        print(" | ".join(header))
        print("-" * (len(header) * 6))

        # Prints each row
        for row in self.table:
            print(" | ".join(["T" if row[var] else "F" for var in header]))
            
