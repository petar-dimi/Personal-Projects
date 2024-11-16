namespace TeacherStudents.Models.Entities
{
    public class Student
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public string? Phone { get; set; }
        public decimal Grade { get; set; }
    }
}
