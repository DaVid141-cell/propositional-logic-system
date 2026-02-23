import re
def evaluate_expression(expression, values_dict):
    """
    Evalute a logical expression given the truth values of variables.
    :param expression ex: string example: "p & (q ^ ~r)"
    :param values_dict: dict example: {'p': True, 'q': False, 'r': True}
    :return: as a boolean result of the expression
    """
    expr = expression
    
    # step 1: convert basic logical symbols
    expr = expr.replace("^", " and ")
    expr = expr.replace("&", " or ")
    expr = expr.replace("~", " not ")


    # step 2: Safe variable replacement
    for var, val in values_dict.items():
        expr = re.sub(rf'\b{var}\b', str(val), expr)

    # step 3: Handle biconditional first (important)
    # A <> B  →  (A == B)
    while "<>" in expr:
        expr = re.sub(
            r'(.+?)\s*<>\s*(.+)',
            r'(\1 == \2)',
            expr
        )

    # step 4: Handle conditional
    # A > B → (not A or B)
    while ">" in expr:
        expr = re.sub(
            r'(.+?)\s*>\s*(.+)',
            r'(not (\1) or (\2))',
            expr
        )

    # step 5: Evaluate
    try:
        return eval(expr)
    except Exception as e:
        raise ValueError(f"Invalid Expression: {expr}. Error: {e}")

