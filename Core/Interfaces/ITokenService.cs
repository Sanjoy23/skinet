using Core.Entities.Identity;

public interface ITokenService
{
    string CreateToken(AppUser user);
}