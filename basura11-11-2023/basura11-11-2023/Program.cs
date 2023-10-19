namespace basura11_11_2023
{
    internal class Program
    {

        public static bool EsPar(int n)
        {
            if (n % 2 == 0)
                return true;
            return false;
        }
        public static List<int> Collatz(int n)
        {
            if (n == null || n == 0)
                return new List<int>();
            List<int> result = new List<int>();
            while (n != 1)
            {
                result.Add(n);
                if (n % 2 == 0)
                    n /= 2;
                else
                    n *= 3 + 1;
            }
            result.Add(n);
            return result;
        }
        public static List<int> OrdenarLista(List<int> lista)
        {
            int aux;
            for (int i = 0; i < lista.Count; i++)
                for (int j = i + 1; j < lista.Count - 1; j++)
                    if (lista[i] > lista[j])
                    {
                        aux = lista[i];
                        lista[i] = lista[j];
                        lista[j] = aux;
                    }
            for (int k = 0; k < lista.Count; k++)
                Console.Write(lista[k]);
            return lista;
        }

        public static List<int> ListaPares(List<int> lista)
        {
            if (lista == null)
                return lista;
            List<int> lista2 = new List<int>();
            for (int i = 0; i < lista.Count; i++)
            {
                int element = lista[i];
                if (element % 2 == 0)
                    lista2.Add(i);
            }
            return lista2;
        }

        public static int[] ArrayPares(int[] array1)
            {

            return array1;
            }
        

        public static void Main(string[] args)
        {
            int aux;
            List<int> lista = new List<int>();
            lista.Add(3);
            lista.Add(1);
            lista.Add(4);
            lista.Add(6);
            lista.Add(7);
            lista.Add(1);
            lista.Add(-3);
            lista.Add(9);
            lista.Add(2);
            lista.Add(0);
            List<int> r = ListaPares(lista);
            
        }
    }       
}


        