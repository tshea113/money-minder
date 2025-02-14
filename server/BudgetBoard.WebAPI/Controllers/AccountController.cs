﻿using BudgetBoard.Database.Models;
using BudgetBoard.Service.Interfaces;
using BudgetBoard.Service.Types;
using BudgetBoard.WebAPI.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BudgetBoard.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController(ILogger<AccountController> logger, UserManager<ApplicationUser> userManager, IAccountService accountService) : ControllerBase
{
    private readonly ILogger<AccountController> _logger = logger;
    private readonly UserManager<ApplicationUser> _userManager = userManager;
    private readonly IAccountService _accountService = accountService;

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Create([FromBody] AccountCreateRequest account)
    {
        try
        {
            await _accountService.CreateAccountAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty), account);
            return Ok();
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }

    [HttpGet]
    [Authorize]
    public async Task<IActionResult> Read()
    {
        try
        {
            return Ok(await _accountService.ReadAccountsAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty)));
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }

    [HttpGet("{guid}")]
    [Authorize]
    public async Task<IActionResult> Read(Guid guid)
    {
        try
        {
            return Ok(await _accountService.ReadAccountsAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty), guid));
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }

    [HttpPut]
    [Authorize]
    public async Task<IActionResult> Update([FromBody] AccountUpdateRequest editedAccount)
    {
        try
        {
            await _accountService.UpdateAccountAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty), editedAccount);
            return Ok();
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }

    [HttpDelete]
    [Authorize]
    public async Task<IActionResult> Delete(Guid guid, bool deleteTransactions = false)
    {
        try
        {
            await _accountService.DeleteAccountAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty), guid, deleteTransactions);
            return Ok();
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }

    [HttpPost]
    [Authorize]
    [Route("[action]")]
    public async Task<IActionResult> Restore(Guid guid)
    {
        try
        {
            await _accountService.RestoreAccountAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty), guid);
            return Ok();
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }

    [HttpPut]
    [Authorize]
    [Route("[action]")]
    public async Task<IActionResult> Order([FromBody] List<AccountIndexRequest> accounts)
    {
        try
        {
            await _accountService.OrderAccountsAsync(new Guid(_userManager.GetUserId(User) ?? string.Empty), accounts);
            return Ok();
        }
        catch (Exception ex)
        {
            return Helpers.BuildErrorResponse(_logger, ex.Message);
        }
    }
}
