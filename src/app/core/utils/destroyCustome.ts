import { DestroyRef, inject } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators"

export const destroyCustome = () => {
    const subject = new Subject()

    inject(DestroyRef).onDestroy(() => {
        console.log('Se destruye componente 💣💣')
        subject.next(true)
        subject.complete()
    })

    return <T>() => takeUntil<T>(subject.asObservable())
}