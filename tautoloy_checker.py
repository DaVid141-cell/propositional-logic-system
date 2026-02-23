class TautologyChecker:
    def __init__(self, truth_table):
        """
        initailize with a truthtable object
        """
        self.truth_table = truth_table

    def check_statement(self):
        """
        Analyze the staetment to determine if it is a tautology, contradiction, or contingent.
        """
        results = [row["Result"] for row in self.truth_table.table]

        if all(results):
            return "Tautology"
        elif not any (results):
            return "Contradiction"
        else:
            return "Contingent"
        
    @staticmethod
    def check_equivalence(tt1, tt2):
        """
        compare's two truth tables for logical equivalence.
        :param tt1: truthtable object for statement 1
        :param tt2: truthtable object for statement 2
        :return: True if equivalent, False otherwise
        """
        results1 = [row["Result"] for row in tt1.table]
        results2 = [row["Result"] for row in tt2.table]

        return results1 == results2