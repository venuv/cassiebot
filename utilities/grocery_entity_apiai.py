def transform(line_arg):
    print("line arg = ",line_arg)
    double_q = '"'
    line_quote = double_q + line_arg + double_q
    line_quote="\""+line_arg+"\""
    comma_line = line_quote+','+line_quote
    print("comma line = ",comma_line,"\n")
    return(comma_line)


with open("grocery_entities.csv", "r") as f:
    lines = (line.rstrip() for line in f)
    altered_lines = [transform(line) for line in lines]

#print("altered lines - \n",altered_lines)
with open("updated_grocery_entities.csv", "w") as fnew:
    fnew.write('\n'.join(altered_lines) + '\n')
