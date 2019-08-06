package com.javamasterclass;

public class MegaBytesConverter {
    public static void printMegaBytesAndKiloBytes(int kilobytes) {
        if (kilobytes < 0) {
            System.out.println("Invalid Value");
        } else {
            int megabytes = kilobytes / 1024;
            int remainingKilobytes = kilobytes % 1024;

            System.out.println(kilobytes + " KB = " +
                    megabytes + " MB and " + remainingKilobytes + " KB");
        }
    }
}