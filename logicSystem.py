from statements import Statements
from truth_table import TruthTable
from tautology_checker import TautologyChecker


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