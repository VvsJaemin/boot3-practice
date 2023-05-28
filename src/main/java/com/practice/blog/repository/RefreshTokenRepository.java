package com.practice.blog.repository;

import com.practice.blog.domain.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.ref.Reference;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

    Optional<RefreshToken> findByUserId(Long userId);

    Optional<RefreshToken> findByRefreshToken(String refreshToken);
}
