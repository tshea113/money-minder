﻿using BudgetBoard.Database.Data;
using BudgetBoard.Database.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BudgetBoard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController : Controller
    {
        private readonly UserDataContext _userDataContext;

        public BudgetController(UserDataContext context)
        {
            _userDataContext = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get(DateTime date)
        {
            var user = await GetCurrentUser(User.Claims.Single(c => c.Type == "id").Value);

            if (user == null)
            {
                return NotFound();
            }

            var budget = user.Budgets
                .Where(b => b.Date.Month == date.Month && b.Date.Year == date.Year);

            return Ok(budget);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Add([FromBody] Budget budget)
        {
            try
            {
                var user = await GetCurrentUser(User.Claims.Single(c => c.Type == "id").Value);

                if (user == null)
                {
                    return NotFound();
                }

                user.Budgets.Add(budget);
                _userDataContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private async Task<User?> GetCurrentUser(string uid)
        {
            try
            {
                var users = await _userDataContext.Users
                    .Include(u => u.Budgets)
                    .ToListAsync();
                var user = users.Single(u => u.Uid == uid);

                return user;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
