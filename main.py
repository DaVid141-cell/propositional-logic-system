from logicSystem import LogicSystem

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
    system = LogicSystem(user_input)

    # processing statement
    system.process()

    # display table
    system.show_results()

    # Equivalence check
    choice = input("\nCheck equivalence with another statement? (y/n): ")

    if choice.lower() == "y":
        second_input = input("Enter second statement: ")
        equivalent = system.check_equivalence(second_input)
        print(f"Statements are logically equivalent: {equivalent}")

if __name__ == "__main__":
    main()
