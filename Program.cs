using System;
using System.Security.Permissions;
using System.Threading;

class ThreadInterrupt
{
    static void Main()
    {
        StayAwake stayAwake = new StayAwake();
        Thread newThread =
            new Thread(new ThreadStart(stayAwake.ThreadMethod));
        newThread.Start();

        // Следующая строка вызывает исключение
        // в ThreadMethod, если Новый поток в данный момент заблокирован
        // или станет заблокированным в будущем.
        newThread.Interrupt();
        Console.WriteLine("Основной поток вызывает  метод Interrupt для  Нового потока");

        // Сообщаем Новому потоку перейти в спящий режим
        stayAwake.SleepSwitch = true;

        // Ожидание завершения работы Нового потока
        newThread.Join();
    }
}

class StayAwake
{
    bool sleepSwitch = false;

    public bool SleepSwitch
    {
        set { sleepSwitch = value; }
    }

    public StayAwake() { }

    public void ThreadMethod()
    {
        Console.WriteLine("Новый поток выполняет метод ThreadMethod");
        while (!sleepSwitch)
        {
            // Используется SpinWait вместо Sleep, чтобы продемонстрировать
            // эффект от вызова Interrupt в работающем потоке
            Thread.SpinWait(10000000);
        }
        try
        {
            Console.WriteLine("Новый поток уходит в состоянии сна");

            // Когда Новый поток переходит в спящий режим, он немедленно
            // просыпается по ThreadInterruptedException(выброс ошибки)
            Thread.Sleep(Timeout.Infinite);
        }
        catch (ThreadInterruptedException e)
        {
            Console.WriteLine("Новый поток не может перейти в спящий режим -" +
            "прерван основным потоком.");
        }
    }
}