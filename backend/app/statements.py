class Statements:
    def __init__(self, expression):
        """
        Initialize a statement object.
        :param expression: string representing the logical expression, e.g., "p & (q ^ ~r)"
        :
        """
        self.expression = expression
        self.variables = self.get_variables()
    
    def get_variables(self):
        """
        extract variables (letters) from the expression.
        let's assume that the variables are single lowercase letters (p, q, r, etc.)
        then return as a list of unique variables names
        """
        vars_set = set()
        for char in self.expression:
            if char.isalpha():
                vars_set.add(char)
        return sorted(list(vars_set))
    
    def evaluate(self, values_dict, evaluator):
        """
        Evaluate the statement using a provided evaluator function
        :param values_dict: dict of variable truth values, e.g., {'p': True, 'q': False, 'r': True}
        :param evaluator: function or object that can evaluate the expression with given values
        :return: Boolean result of the statement
        """
        return evaluator(self.expression, values_dict)
    
    def __str__(self):
        return f"Statement: {self.expression}, Variables: {self.variables}"

