class Compara {
    // Complexidade O(1)
    void isPar(int n){
        int num = n;

        if (num % 2 == 0) {
            System.out.println("O número é par");
        } else {
            System.out.println("O número é ímpar");
        }
    }

    // Complexidade O(n)

    void isPrimo(int n){
        int num = n;
        int cont = 0;

        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                cont++;
            }
        }

        if (cont == 2) {
            System.out.println("O número é primo");
        } else {
            System.out.println("O número não é primo");
        }
    }

    // Complexidade O(n²)

    void isFibonacci(int n){
        int num = n;
        int cont = 0;

        for (int i = 0; i <= num; i++) {
            for (int j = 0; j <= num; j++) {
                if (i + j == num) {
                    cont++;
                }
            }
        }

        if (cont > 0) {
            System.out.println("O número é de Fibonacci");
        } else {
            System.out.println("O número não é de Fibonacci");
        }
    }

}

public class exemplo {
    public static void main(String[] args) throws Exception {
        int num = 13;
        Compara compara = new Compara();
        compara.isPar(num);
        compara.isPrimo(num);
        compara.isFibonacci(num);
    }
}
