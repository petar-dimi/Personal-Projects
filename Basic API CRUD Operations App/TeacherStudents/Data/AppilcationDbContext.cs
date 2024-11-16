using Microsoft.EntityFrameworkCore;
using TeacherStudents.Models.Entities;

namespace TeacherStudents.Data
{
    public class AppilcationDbContext : DbContext
    {   
        public AppilcationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
    }
}
