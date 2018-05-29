function Subject(subName) {
    this.subName = subName;
}

Subject.prototype.getSubjectName = function () {
    return this.subName;
}