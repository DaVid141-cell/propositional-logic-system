from logicSystem import LogicSystem

def main():
    print("=== Propositional Logic System ===")

    print("\nSymbols and Discription: ")
    print("'~' = Negation/not/~p")
    print("'^' = Conjunction/and/p ^ q")
    print("'|' = Disjunction/or/p v q")
    print("'>' = Conditional/if p then q/p > q")
    print("'<>' = Biconditional/p if and only if q/p <> q")
    user_input = input("\nEnter a logical statement: ")

    # Create a statement object
    system = LogicSystem(user_input)

    # processing statement
    system.process()

    # display table
    system.show_results()

    # Optional if user has a given value
    while True:
        solve = input("\nDo you want to solve using given values? (y/n): ")
        if solve in ["y", "n"]:
            break
        print("Invalid input. Please enter 'y' or 'n'.")

    if solve == "y":
        values_dict, result = system.solve_given_values()            
        system.solve_with_steps(values_dict)
        output = "T" if result else "F"
        print(f"\nFinal result for given values: {system.expression} = {output}")
        

    # Equivalence check
    while True:
        choice = input("\nCheck equivalence with another statement? (y/n): ")
        if choice in ["y", "n"]:
            break
        print("Invalid input. Please enter 'y' or 'n'.")

    if choice== "y":
        second_input = input("Enter second statement: ")
        equivalent = system.check_equivalence(second_input)
        print(f"Statements are logically equivalent: {equivalent}")

if __name__ == "__main__":
    main()
