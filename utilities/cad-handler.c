#include <unistd.h>
#include <sys/reboot.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    int value = reboot(RB_DISABLE_CAD);

    if (value == 0) {
        return 0;
    } else if (value == -1) {
        printf(strerror(errno));
        printf("\n");
        return errno;
    } else {
        printf(strerror(value));
        printf("\n");
        return value;
    }
}
