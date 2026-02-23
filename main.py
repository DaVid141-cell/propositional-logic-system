from statements import Statements
from truth_table import TruthTable
from tautoloy_checker import TautologyChecker
from connectives import evaluate_expression

def main():
    print("=== Propositional Logic System ===")

    print("\nSymbols and Discription: ")
    print("'~' = Negation/not/~p")
    print("'^' = Conjunction/and/p ^ q")
    print("'&' = Disjunction/or/p & q")
    print("'>' = Conditional/if p then q/p > q")
    print("'<>' = Biconditional/p if and only if q/p <> q")
    user_input = input("\nEnter a logical statement: ")

    # Create a statement object
    state = Statements(user_input)

    # generate truth table
    tt = TruthTable(state)
    tt.generate_table()

    # display table
    print("\nTruth Table:")
    tt.display_table()

    # check if statement is tautology/contradiction/contingent
    checker = TautologyChecker(tt)
    result = checker.check_statement()
    print(f"\nStatement analysis: {result}")

    # optional: checks if its equivalence with another statement
    choice = input("\nDo you want to check equivalence with another statement? (y/n): ")
    if choice.lower() == "y":
        second_input = input("Enter second statement: ")
        state2 = Statements(second_input)
        tt2 = TruthTable(state2)
        tt2.generate_table()
        equivalent = TautologyChecker.check_equivalence(tt, tt2)
        print(f"Statements are logically equivalent: {equivalent}")

if __name__ == "__main__":
    main()
