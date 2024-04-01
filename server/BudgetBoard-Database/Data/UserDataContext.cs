﻿using BudgetBoard.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace BudgetBoard.Database.Data
{
    public class UserDataContext : DbContext
    {
        public UserDataContext(DbContextOptions<UserDataContext> options) :
            base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(u =>
            {
                u.HasMany(e => e.Accounts)
                .WithOne(e => e.User)
                .HasForeignKey(e => e.UserID);

                u.HasMany(e => e.Budgets)
                .WithOne(e => e.User)
                .HasForeignKey(e => e.UserID);

                u.ToTable("User");
            });


            modelBuilder.Entity<Account>((a) =>
            {
                a.HasMany(e => e.Transactions)
                .WithOne(e => e.Account)
                .HasForeignKey(e => e.AccountID);

                a.ToTable("Account");
            });

            modelBuilder.Entity<Transaction>().ToTable("Transaction");

            modelBuilder.Entity<Budget>().ToTable("Budget");

            modelBuilder.UseIdentityColumns();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Budget> Budgets { get; set; }
    }
}