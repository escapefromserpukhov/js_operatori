from datetime import datetime
import time


def norm(maxN):
    start_time = datetime.now()

    result_list = [];
    n = 2

    while len(result_list) < maxN:

        check = False;  
        result_array_numb = 0

        for result_array_numb in result_list:

            if n % result_array_numb == 0 & (n / result_array_numb != 1):
                check = True
                break


        if (check == False):
            result_list.append(n)

        n = n + 1
        
    print(datetime.now() - start_time)
    return result_list;



if __name__ == "__main__":
    (norm(100000))