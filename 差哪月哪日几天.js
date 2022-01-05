
function qiuDay(str) {
    let oldDay = new Date(`${new Date().getFullYear()}-${str}`)
    let newDay = new Date()
    let cha = Math.abs(oldDay - newDay)
    let chaDay = Math.floor(cha / (24 * 3600 * 1000))
    let leavel = cha % (24 * 3600 * 1000)
    let hour = Math.floor(leavel / (3600 * 1000))
    let leavel2 = leavel % (3600 * 1000);
    let minute = Math.floor(leavel2 / (60 * 1000))
    let leavel3 = leavel2 % (60 * 1000);

    let second = Math.floor(leavel3 / 1000)
    console.log(oldDay, 'y', newDay, leavel3);
    return {
        day: chaDay,
        hour: hour,
        minute: minute,
        second: second
    }
}
console.log(qiuDay('12-1 01:00:00'));